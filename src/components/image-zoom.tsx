'use client';

import { useState, useCallback, useRef, useEffect, type ReactElement } from 'react';
import type { ComponentProps } from 'react';
import Zoom, { type UncontrolledProps } from 'react-medium-image-zoom';
import { Image, type ImageProps } from 'fumadocs-core/framework';
import '../styles/image-zoom.css';

export type ImageZoomProps = ImageProps & {
  zoomInProps?: ComponentProps<'img'>;
  rmiz?: UncontrolledProps;
};

function getImageSrc(src: ImageProps['src']): string {
  if (typeof src === 'string') return src;

  if (typeof src === 'object') {
    if ('default' in src) return (src as { default: { src: string } }).default.src;
    return src.src;
  }

  return '';
}

function extractFilename(url: string): string {
  if (!url) return '';

  try {
    let decodedUrl = url;
    try {
      decodedUrl = decodeURIComponent(url);
    } catch (e) {
      // ignore
    }

    const pathname = decodedUrl.split('?')[0].split('#')[0];
    const parts = pathname.split('/');
    const filename = parts[parts.length - 1] || '';

    if (!filename) return '';

    const dots = filename.split('.');

    // 如果有超过2个点（如 fluid-setup.0.png），取第一个和最后一个
    if (dots.length > 2) {
      return `${dots[0]}.${dots[dots.length - 1]}`;
    }

    return filename;
  } catch (e) {
    return '';
  }
}

let globalId = 0;

function CustomZoomContent({ img, buttonUnzoom, onUnzoom, originalSrc }: {
  img: ReactElement | null;
  buttonUnzoom: ReactElement<HTMLButtonElement>;
  onUnzoom: (...args: any[]) => void;
  originalSrc: string;
}) {
  const [copied, setCopied] = useState(false);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarKey, setToolbarKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isClosingRef = useRef(false);

  const imgSrc = (img?.props as { src?: string } | undefined)?.src || '';
  const displayName = extractFilename(originalSrc) || extractFilename(imgSrc);

  useEffect(() => {
    if (!img) {
      // 关闭状态
      isClosingRef.current = true;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      // 强制隐藏
      setShowToolbar(false);
      setToolbarKey(prev => prev + 1); // 强制重新挂载，清除动画

      return;
    }

    // 打开状态
    isClosingRef.current = false;
    setShowToolbar(false); // 先重置

    // 延迟显示
    timerRef.current = setTimeout(() => {
      if (!isClosingRef.current) {
        setShowToolbar(true);
      }
    }, 400);

    return () => {
      isClosingRef.current = true;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [img]);

  const handleDownload = useCallback(async () => {
    const downloadUrl = originalSrc || imgSrc;
    const filename = extractFilename(downloadUrl) || 'image.png';

    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(downloadUrl, '_blank');
    }
  }, [imgSrc, originalSrc]);

  const handleCopyLink = useCallback(async () => {
    const copyUrl = originalSrc || imgSrc;
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  }, [imgSrc, originalSrc]);

  return (
    <>
      <div className="rmiz-custom">
        <div className="rmiz-image-container" onClick={onUnzoom}>
          {img}
        </div>
      </div>
      {buttonUnzoom}
      <div className={`rmiz-toolbar ${showToolbar ? 'visible' : ''}`} key={`toolbar-${toolbarKey}`}>
        <span className={`rmiz-toolbar-title ${!displayName ? 'loading' : ''}`} title={originalSrc || imgSrc}>
          {displayName || '加载中...'}
        </span>
        <div className="rmiz-toolbar-actions">
          <button
            className="rmiz-toolbar-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleCopyLink();
            }}
            title={copied ? '已复制!' : '复制链接'}
          >
            {copied ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
            )}
          </button>
          <button
            className="rmiz-toolbar-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            title="下载图片"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </button>
          <div className="rmiz-toolbar-divider" />
          <button
            className="rmiz-toolbar-btn rmiz-toolbar-close"
            onClick={(e) => {
              e.stopPropagation();
              onUnzoom();
            }}
            title="关闭"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export function ImageZoom({ zoomInProps, children, rmiz, ...props }: ImageZoomProps) {
  const originalSrc = getImageSrc(props.src);

  return (
    <Zoom
      zoomMargin={80}
      wrapElement="span"
      ZoomContent={(zoomProps) => (
        <CustomZoomContent {...(zoomProps as any)} originalSrc={originalSrc} />
      )}
      {...rmiz}
      zoomImg={{
        src: originalSrc,
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      {children ?? (
        <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px" {...props} />
      )}
    </Zoom>
  );
}