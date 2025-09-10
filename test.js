// Import the decode function
const decode = require('./decode.js');

/**
 * Test runner for the decode function
 */
function runTests() {
    const testCases = [
        {
            input: ["Xlmw mw e wigvix qiwweki.", 4],
            expected: "This is a secret message.",
            description: "Test case 1: Forward shift of 4"
        },
        {
            input: ["Byffi Qilfx!", 20],
            expected: "Hello World!",
            description: "Test case 2: Forward shift of 20"
        },
        {
            input: ["Zqd xnt njzx?", -1],
            expected: "Are you okay?",
            description: "Test case 3: Backward shift of -1"
        },
        {
            input: ["oannLxmnLjvy", 9],
            expected: "freeCodeCamp",
            description: "Test case 4: Forward shift of 9"
        }
    ];

    let allPassed = true;
    
    console.log("Running decode function tests...\n");
    
    testCases.forEach((testCase, index) => {
        const [message, shift] = testCase.input;
        const result = decode(message, shift);
        const passed = result === testCase.expected;
        
        console.log(`Test ${index + 1}: ${testCase.description}`);
        console.log(`  Input: decode("${message}", ${shift})`);
        console.log(`  Expected: "${testCase.expected}"`);
        console.log(`  Got:      "${result}"`);
        console.log(`  Status:   ${passed ? '✅ PASSED' : '❌ FAILED'}`);
        console.log();
        
        if (!passed) {
            allPassed = false;
        }
    });
    
    console.log(`Overall result: ${allPassed ? '✅ All tests passed!' : '❌ Some tests failed!'}`);
    return allPassed;
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

module.exports = runTests;