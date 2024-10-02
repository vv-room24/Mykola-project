function handleClick(contentId) {
    const contentBlocks = document.querySelectorAll('.content div[data-content]');
    contentBlocks.forEach(block => {
        block.classList.remove('active');
    });
    const activeBlock = document.getElementById(contentId + 'Section');
    activeBlock.classList.add('active');
}