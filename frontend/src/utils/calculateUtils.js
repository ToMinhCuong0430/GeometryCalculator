export async function executeCalculation({
    validate,
    calculate,
    onSuccess,
    addToHistory,
    shape,
    inputs,
    setLoading,
    setError,
    clearResult
}) {
    const validationError = validate();
    if (validationError) {
        clearResult();
        setError(validationError);
        return;
    }

    setLoading(true);
    setError(null);

    try {
        const result = await calculate();
        onSuccess(result);
        await addToHistory(shape, inputs, result);
    } catch (error) {
        setError(error.message);
        clearResult();
    } finally {
        setLoading(false);
    }
}