function createResponseMessage(status = 'success', message = '', data = null) {
    const statusCodes = {
        success: { code: 'success', description: 'Operation successful' },
        error: { code: 'error', description: 'Operation failed' },
        info: { code: 'info', description: 'Informational message' },
        warning: { code: 'warning', description: 'Warning message' }
        // Add more message types as needed
    };

    const statusCode = statusCodes[status] || statusCodes.error;

    return {
        status: statusCode.code,
        message: message || statusCode.description,
        data: data
    };
}

module.exports = createResponseMessage;