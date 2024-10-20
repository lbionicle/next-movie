// components/Modal.tsx
import React, { ReactNode, useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import StarRating from "../icons/starRating";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/30"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <FocusLock>
        <div
          className="absolute left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-[20px] bg-[#181818] p-6 shadow-lg md:rounded-3xl lg:rounded-[28px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-6 top-6 text-white hover:text-white"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {title && (
            <h2 className="mb-6 text-xl font-semibold text-white">{title}</h2>
          )}

          <div className="max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </FocusLock>
    </div>
  );
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      review,
      rating,
    };

    console.log("Данные формы:", formData);

    setName("");
    setReview("");
    setRating(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Оставьте свой отзыв">
      <form onSubmit={handleSubmit} action="#">
        <div className="flex flex-col space-y-4">
          {/* Поле для имени */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-white"
              htmlFor="reviewer"
            >
              Ваше имя *
            </label>
            <input
              className="w-full rounded-md border-2 border-white/30 bg-white/10 p-2 text-[14px] text-white placeholder:text-[14px] backdrop:blur-[2px] focus:border-white focus:outline-none"
              type="text"
              placeholder="Имя"
              id="reviewer"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Поле для отзыва */}
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-white"
              htmlFor="review"
            >
              Напишите отзыв
            </label>
            <textarea
              className="w-full resize-none rounded-md border-2 border-white/30 bg-white/10 p-2 text-[14px] text-white placeholder:text-[14px] backdrop:blur-[2px] focus:border-white focus:outline-none"
              placeholder="Ваш отзыв"
              id="review"
              name="review"
              rows={4}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          {/* Оценка фильма */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              Оцените фильм *
            </label>
            <StarRating rating={rating} onChange={setRating} />
          </div>
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          className="mt-8 w-full rounded-[20px] bg-white py-2 font-semibold text-[#181818] transition-all focus:border-black focus:outline-none md:rounded-3xl lg:rounded-[28px]"
        >
          Оставить отзыв
        </button>
      </form>
    </Modal>
  );
}
