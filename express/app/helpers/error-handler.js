
const errorHandler = (mensagem = "Internal Server Error", status = 500, stackTrace = []) => {

    stackTrace = stackTrace.map(trace => {
        return { messagem: trace.message, campo: trace.path }
    });

    return {
        mensagem,
        status,
        stackTrace
    }
}

module.exports = errorHandler