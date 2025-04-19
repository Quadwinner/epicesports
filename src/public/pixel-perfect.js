/**
 * Pixel Perfect Utilities for Epic Esports
 * 
 * This file contains utility functions to help achieve pixel-perfect UI
 * across all pages of the Epic Esports website.
 */

// Main function to apply pixel-perfect adjustments to the page
export function applyPixelPerfect() {
    // Apply to all text elements
    optimizeTextElements();
    
    // Apply to all images
    optimizeImages();
    
    // Apply to all buttons
    optimizeButtons();
    
    // Apply to all input fields
    optimizeInputFields();
    
    // Apply consistent spacing
    applyConsistentSpacing();
}

// Optimize text elements for pixel-perfect rendering
function optimizeTextElements() {
    try {
        // Apply to all text elements
        const textElements = $w('Text');
        if (textElements && textElements.length) {
            textElements.forEach(text => {
                if (text) {
                    // Set exact font size
                    const fontSize = parseInt(text.text.fontSize);
                    if (!isNaN(fontSize)) {
                        text.text.fontSize = Math.round(fontSize);
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error optimizing text elements:', error);
    }
}

// Optimize images for pixel-perfect rendering
function optimizeImages() {
    try {
        const images = $w('Image');
        if (images && images.length) {
            images.forEach(image => {
                if (image) {
                    // Ensure images have exact dimensions
                    if (typeof image.width === 'number' && typeof image.height === 'number') {
                        image.width = Math.round(image.width);
                        image.height = Math.round(image.height);
                    }
                    
                    // Set proper scaling mode for best quality
                    if (typeof image.scaling === 'string') {
                        image.scaling = 'fill';
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

// Optimize buttons for consistent appearance
function optimizeButtons() {
    try {
        const buttons = $w('Button');
        if (buttons && buttons.length) {
            // Find the largest dimensions
            let maxWidth = 0;
            let maxHeight = 0;
            
            buttons.forEach(button => {
                if (button) {
                    if (typeof button.width === 'number') {
                        maxWidth = Math.max(maxWidth, button.width);
                    }
                    if (typeof button.height === 'number') {
                        maxHeight = Math.max(maxHeight, button.height);
                    }
                }
            });
            
            // Round to nearest pixel
            maxWidth = Math.round(maxWidth);
            maxHeight = Math.round(maxHeight);
            
            // Apply consistent sizes
            buttons.forEach(button => {
                if (button) {
                    if (typeof button.width === 'number' && typeof button.height === 'number') {
                        button.width = maxWidth;
                        button.height = maxHeight;
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error optimizing buttons:', error);
    }
}

// Optimize input fields for pixel-perfect alignment
function optimizeInputFields() {
    try {
        const inputFields = $w('Input');
        if (inputFields && inputFields.length) {
            inputFields.forEach(input => {
                if (input) {
                    // Ensure exact dimensions
                    if (typeof input.width === 'number' && typeof input.height === 'number') {
                        input.width = Math.round(input.width);
                        input.height = Math.round(input.height);
                    }
                }
            });
        }
        
        // Do the same for text boxes
        const textBoxes = $w('TextBox');
        if (textBoxes && textBoxes.length) {
            textBoxes.forEach(textBox => {
                if (textBox) {
                    if (typeof textBox.width === 'number' && typeof textBox.height === 'number') {
                        textBox.width = Math.round(textBox.width);
                        textBox.height = Math.round(textBox.height);
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error optimizing input fields:', error);
    }
}

// Apply consistent spacing throughout the page
function applyConsistentSpacing() {
    try {
        // Apply to sections
        const sections = $w('Section');
        if (sections && sections.length) {
            // Apply consistent margins between sections
            for (let i = 1; i < sections.length; i++) {
                const section = sections[i];
                if (section && typeof section.margin === 'object') {
                    // Set exact top margin
                    section.margin.top = 48;
                }
            }
        }
        
        // Apply to containers
        const containers = $w('Container');
        if (containers && containers.length) {
            containers.forEach(container => {
                if (container && typeof container.padding === 'object') {
                    // Round all padding values to exact pixels
                    if (typeof container.padding.top === 'number') {
                        container.padding.top = Math.round(container.padding.top);
                    }
                    if (typeof container.padding.bottom === 'number') {
                        container.padding.bottom = Math.round(container.padding.bottom);
                    }
                    if (typeof container.padding.left === 'number') {
                        container.padding.left = Math.round(container.padding.left);
                    }
                    if (typeof container.padding.right === 'number') {
                        container.padding.right = Math.round(container.padding.right);
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error applying consistent spacing:', error);
    }
}
