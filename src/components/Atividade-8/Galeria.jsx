/*
8. Galeria de Imagens com Visualização Detalhada: Crie uma galeria simples com uma lista de imagens. Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal. Use useState para armazenar a imagem selecionada e renderize o modal condicionalmente. Desafio: adicione um botão de “Fechar” no modal e uma funcionalidade de navegação entre as imagens.
*/

import { useState } from "react";
import styles from "./Galeria.module.css";

export function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "/assets/imagem-rdr-1.jpg",
    "/assets/imagem-rdr-2.jpg",
    "/assets/imagem-rdr-3.jpg",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={styles.galeria}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            className={styles.imagem}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal}>
          <img
            src={selectedImage}
            alt="Imagem Detalhada"
            className={styles.modalImagem}
          />
          <button className={styles.botaoFechar} onClick={closeModal}>
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}
