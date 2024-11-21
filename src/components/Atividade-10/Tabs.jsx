/*
10. Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está ativa e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque a aba ativa.
*/

import { useState } from "react";
import styles from './Tabs.module.css';

export function Tabs() {
    const [activeTab, setActiveTab] = useState('home');
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabButtons}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'home' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('home')}
                >
                    Home
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'sobre' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('sobre')}
                >
                    Sobre
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'contato' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('contato')}
                >
                    Contato
                </button>
            </div>
            <div className={styles.tabContent}>
                <h2 className={styles.tabTitle}>Aba Ativa: {activeTab}</h2>
                {activeTab === 'home' && <p className={styles.tabText}>Conteúdo da aba Home</p>}
                {activeTab === 'sobre' && <p className={styles.tabText}>Conteúdo da aba Sobre</p>}
                {activeTab === 'contato' && <p className={styles.tabText}>Conteúdo da aba Contato</p>}
            </div>
        </div>
    );
}
