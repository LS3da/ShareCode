document.addEventListener('DOMContentLoaded', function() {
    const collapsibleBlocks = document.querySelectorAll('.collapsible');

    collapsibleBlocks.forEach(block => {
        const title = block.querySelector('.code-title');
        const content = block.querySelector('.code-content');

        // 初期状態ではコンテンツを隠す
        if (!block.classList.contains('active')) {
            content.style.maxHeight = '0';
            content.style.paddingTop = '0';
            content.style.paddingBottom = '0';
        }

        title.addEventListener('click', () => {
            block.classList.toggle('active');

            if (block.classList.contains('active')) {
                // 展開する
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.paddingTop = '1rem';
                content.style.paddingBottom = '1rem';
            } else {
                // 縮小する
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            }
        });
    });
});
