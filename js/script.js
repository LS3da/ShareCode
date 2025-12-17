document.addEventListener('DOMContentLoaded', function() {
    // --- Collapsible Code Blocks ---
    const collapsibleBlocks = document.querySelectorAll('.collapsible');

    collapsibleBlocks.forEach(block => {
        const title = block.querySelector('.code-title');
        
        title.addEventListener('click', (e) => {
            // Stop propagation if the click is on the button itself
            if (e.target.classList.contains('copy-btn')) {
                return;
            }

            block.classList.toggle('active');
            const content = block.querySelector('.code-content');

            if (block.classList.contains('active')) {
                // Expand
                content.style.maxHeight = content.scrollHeight + 'px';
                if(content.style.paddingTop == '0px' || content.style.paddingTop == '') {
                    content.style.paddingTop = '1rem';
                    content.style.paddingBottom = '1rem';
                }
            } else {
                // Collapse
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            }
        });
    });

    // --- Copy Button Functionality ---
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the collapsible from toggling

            const codeBlock = button.closest('.code-block');
            const codeToCopy = codeBlock.querySelector('pre code');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(codeToCopy.innerText).then(() => {
                    button.textContent = 'コピー完了！';
                    button.classList.add('copied');

                    setTimeout(() => {
                        button.textContent = 'コピー';
                        button.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                    button.textContent = '失敗';
                });
            }
        });
    });
});
