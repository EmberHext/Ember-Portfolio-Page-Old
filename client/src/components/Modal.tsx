import React from 'react';
import styles from './Modal.module.css';
import { useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  url: string;
  cover_image: string;
  tag_list: string[];
  readable_publish_date: string;
  description: string;
}

interface ModalProps {
    onClose: () => void;
    articles: Article[];
    isOpen: boolean;
  }
  
  const Modal: React.FC<ModalProps> = ({ onClose, articles, isOpen }) => {
    useEffect(() => {
      if (isOpen) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
  
      return () => {
        document.body.classList.remove('modal-open');
      };
    }, [isOpen]);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
  
  return (
    <div onClick={handleClickOutside} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className={`bg-black text-white p-6 rounded-lg max-w-2xl w-full overflow-y-auto ${styles.modalContent} shadow-lg relative`}>
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-red-500 text-4xl"
        >
          &times;
        </button>
        <h2 className="mb-8 text-center text-xl font-bold">My Articles</h2>
        <ul className="list-none pl-0">
          {articles.map((article: Article) => (
            <li key={article.id} className="mb-6">
              {article.cover_image && (
                <img
                  src={article.cover_image}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-400 font-semibold text-lg"
              >
                {article.title}
              </a>
              <p className="text-gray-600 text-sm">{article.readable_publish_date}</p>
              <p className="mt-2">{article.description}</p>
              <ul className="flex flex-wrap mt-2">
                {article.tag_list.map((tag) => (
                  <li key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 mr-2 mb-2 rounded">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-400 active:bg-red-800">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
