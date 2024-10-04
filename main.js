function showContent(contentId) {
    // Отримати всі блоки з контентом
    const contentBlocks = document.querySelectorAll('.content div');
    
    // Приховати всі блоки
    contentBlocks.forEach(block => {
        block.classList.remove('active');
    });
    
    // Показати потрібний блок
    const activeBlock = document.getElementById(contentId);
    activeBlock.classList.add('active');
    }
    