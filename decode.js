/**
 * Decodes a secret message string using a Caesar cipher with a given shift value
 * @param {string} message - The encoded message to decode
 * @param {number} shift - The number of letters used to shift the message
 * @returns {string} The decoded message
 */
function decode(message, shift) {
    let result = '';
    
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        
        // Check if character is a letter
        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = char >= 'A' && char <= 'Z';
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            
            // Get the character code relative to the base (A or a)
            let charCode = char.charCodeAt(0) - base;
            
            // Apply the reverse shift (subtract the shift to decode)
            // Add 26 to handle negative results and use modulo for wrapping
            charCode = (charCode - shift + 26) % 26;
            
            // Convert back to character
            result += String.fromCharCode(charCode + base);
        } else {
            // Non-alphabetical characters remain unchanged
            result += char;
        }
    }
    
    return result;
}

// Export for use in tests or other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = decode;
}

// Also make available globally for browser use
if (typeof window !== 'undefined') {
    window.decode = decode;
}