## Checksum

checksumError = (originalText , textToCompare) => {
    const isValid = checksum(originalText, textToComparar);

    expect(isValid).equalsTo(true).return(
    return {
        error: {
            message = 'El archivo no es valida'
        }
    });

};

checksumExceptionError = (originalText , textToComparar) => {
    const isValid = checksum(originalText, textToComparar);
    expect(isValid).equalsTo(true).return(
    return {
            error: {
                message = 'Error durante la ejecución'
            }
        });
};

checksumConvertToByte =(char) => {
    const byteResult = convertToByte(string);
    expect(bytesResult).sizeEquals(8).then({
        return {
            status: true,
            result: byteResult
        }
    });
}

checksumConcatByte = (byteResult) => {
    const flagResult = add(byteResult);
    expect(flagResult).isTrue(flagResult).then({
        return {
            result: true
        }
    });
}

checksumCompare = (originalText , textToCompare) => {
    const flagCompare = compare(originalText, textToCompare);
    expect(flagcCompare).isTrue(flagCompare).then({
        return{
            result: true
        }
    });
}

checksumStringIsEmpty = (text) => {
    const flagIsEmpty = isEmptyString(text);
    expect(flag).isFalse(flagIsEmpty).then({
        return{
            result: true
        }
    });
}