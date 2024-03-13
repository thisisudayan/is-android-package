function isValidPackageName(packageName) {
    // Regular expression for Android package name validation
    const packageRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,150}$/;
    
    // List of restricted keywords in Java
    const restrictedKeywords = ['abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'false', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'void', 'volatile', 'while'];

    // Check if the package name matches the regex and does not contain restricted keywords
    return packageRegex.test(packageName) && !restrictedKeywords.some(keyword => packageName.includes(keyword));
}

module.exports = isValidPackageName;
