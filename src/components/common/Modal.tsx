"use client";

import { useEffect, ReactNode } from "react";
import Button from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnBackdrop?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnBackdrop = true,
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`relative w-full ${sizeStyles[size]} transform rounded-lg bg-white shadow-xl transition-all dark:bg-gray-900`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-700">
            <h2 className="text-foreground text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="닫기"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Body */}
        <div className="text-foreground p-6">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-6 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// 기본 Footer 컴포넌트 예시
export function ModalFooter({
  onCancel,
  onConfirm,
  cancelText = "취소",
  confirmText = "확인",
  loading = false,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
  loading?: boolean;
}) {
  return (
    <>
      <Button variant="ghost" onClick={onCancel} disabled={loading}>
        {cancelText}
      </Button>
      <Button onClick={onConfirm} loading={loading}>
        {confirmText}
      </Button>
    </>
  );
}
