/**
 * Pixel Perfect Utilities for Epic Esports
 * 
 * This file contains utility functions to help achieve pixel-perfect UI
 * across all pages of the Epic Esports website.
 */

// Function to ensure elements are aligned to pixel grid
export function snapToPixelGrid(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const x = Math.round(rect.left);
    const y = Math.round(rect.top);
    
    // Use Wix's style API instead of direct DOM manipulation
    if (element.style && typeof element.style.transform === 'string') {
        element.style.transform = `translate(${x - rect.left}px, ${y - rect.top}px)`;
    }
}

// Function to ensure consistent spacing between elements
export function applyConsistentSpacing(container, itemSelector, spacing) {
    if (!container) return;
    
    // Use Wix's selector API
    const items = $w(itemSelector, container);
    items.forEach((item, index) => {
        if (index > 0 && item.style) {
            // Use Wix's style API
            item.style.marginTop = spacing + 'px';
        }
    });
}

// Function to ensure text is rendered crisply
export function optimizeTextRendering(textElement) {
    if (!textElement || !textElement.style) return;
    
    // Apply optimal text rendering settings using Wix's style API
    if (typeof textElement.style.textRendering === 'string') {
        textElement.style.textRendering = 'optimizeLegibility';
    }
    
    // Note: Wix may not support these browser-specific properties
    // but we'll include them for completeness
    if (typeof textElement.style.webkitFontSmoothing === 'string') {
        textElement.style.webkitFontSmoothing = 'antialiased';
    }
    
    if (typeof textElement.style.mozOsxFontSmoothing === 'string') {
        textElement.style.mozOsxFontSmoothing = 'grayscale';
    }
}

// Function to ensure images are rendered at exact dimensions
export function optimizeImageRendering(imgElement) {
    if (!imgElement) return;
    
    // For Wix Image elements
    if (imgElement.width && imgElement.height) {
        // Set exact dimensions to prevent subpixel rendering issues
        imgElement.width = Math.round(imgElement.width);
        imgElement.height = Math.round(imgElement.height);
    }
    
    // Apply image rendering style if supported
    if (imgElement.style && typeof imgElement.style.imageRendering === 'string') {
        imgElement.style.imageRendering = 'auto';
    }
}

// Function to ensure consistent button sizes
export function standardizeButtonSizes(buttonSelector) {
    // Use Wix's selector API
    const buttons = $w(buttonSelector);
    if (!buttons || buttons.length === 0) return;
    
    // Find the largest button dimensions
    let maxWidth = 0;
    let maxHeight = 0;
    
    buttons.forEach(button => {
        if (button.getBoundingClientRect) {
            const rect = button.getBoundingClientRect();
            maxWidth = Math.max(maxWidth, Math.round(rect.width));
            maxHeight = Math.max(maxHeight, Math.round(rect.height));
        }
    });
    
    // Apply consistent sizes to all buttons
    buttons.forEach(button => {
        if (button.style) {
            button.style.width = `${maxWidth}px`;
            button.style.height = `${maxHeight}px`;
        }
    });
}

// Function to ensure pixel-perfect grid alignment
export function alignToGrid(elements, gridSize = 8) {
    if (!elements || elements.length === 0) return;
    
    elements.forEach(element => {
        if (element.getBoundingClientRect && element.style) {
            const rect = element.getBoundingClientRect();
            
            // Calculate the nearest grid positions
            const left = Math.round(rect.left / gridSize) * gridSize;
            const top = Math.round(rect.top / gridSize) * gridSize;
            const width = Math.round(rect.width / gridSize) * gridSize;
            const height = Math.round(rect.height / gridSize) * gridSize;
            
            // Apply the adjusted position and size using Wix's style API
            if (typeof element.style.position === 'string') {
                element.style.position = 'absolute';
                element.style.left = `${left}px`;
                element.style.top = `${top}px`;
                element.style.width = `${width}px`;
                element.style.height = `${height}px`;
            }
        }
    });
}

// Initialize pixel-perfect adjustments
export function initPixelPerfect() {
    // Apply to all pages when they load
    $w.onReady(function() {
        // Optimize text elements - use individual selectors for Wix compatibility
        $w('Text').forEach(element => {
            optimizeTextRendering(element);
        });
        
        $w('Heading').forEach(element => {
            optimizeTextRendering(element);
        });
        
        // Optimize images
        $w('Image').forEach(element => {
            optimizeImageRendering(element);
        });
        
        // Standardize buttons
        standardizeButtonSizes('Button');
    });
}
