function createUserProfiles(originalNames, modifiedNames) {
  
    if (!Array.isArray(originalNames) || !Array.isArray(modifiedNames)) {
        throw new TypeError('Both inputs should be arrays');
    }

    
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('Both arrays must have the same length');
    }

    
    return originalNames.map((originalName, index) => {
        if (typeof originalName !== 'string' || typeof modifiedNames[index] !== 'string') {
            throw new TypeError('Elements of both arrays should be strings');
        }
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });
}

const originalNames = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "diana", "EDWARD"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

module.exports = { createUserProfiles };
