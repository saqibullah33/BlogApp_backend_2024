function createResponseMessage(status = 'success', message = '', data = null) {
    return {
        status: status,
        message: message,
        data: data
    };
}

// Example usage:
const customMessage = createResponseMessage('success', 'User created successfully', { userId: 123 });
console.log(customMessage);
// Output: { status: 'success', message: 'User created successfully', data: { userId: 123 } }

const defaultCustomMessage = createResponseMessage();
console.log(defaultCustomMessage);
// Output: { status: 'success', message: '', data: null }




function createResponseMessage(status = 'success', message = '', data = null) {
    const statusCodes = {
        success: { code: 'success', description: 'Operation successful' },
        error: { code: 'error', description: 'Operation failed' },
        info: { code: 'info', description: 'Informational message' },
        warning: { code: 'warning', description: 'Warning message' }
        
    };

    const statusCode = statusCodes[status] || statusCodes.error;

    return {
        status: statusCode.code,
        message: message || statusCode.description,
        data: data
    };
}

// Example usage:
const successMessage = createResponseMessage('success', 'User created successfully', { userId: 123 });
console.log(successMessage);
// Output: { status: 'success', message: 'User created successfully', data: { userId: 123 } }

const infoMessage = createResponseMessage('info', 'This is an informational message');
console.log(infoMessage);
// Output: { status: 'info', message: 'This is an informational message', data: null }

const warningMessage = createResponseMessage('warning', 'This is a warning message');
console.log(warningMessage);
// Output: { status: 'warning', message: 'This is a warning message', data: null }

const errorMessage = createResponseMessage();
console.log(errorMessage);
// Output: { status: 'error', message: 'Operation failed', data: null }


const HttpStatus = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

// Example usage:
app.get('/api/resource', (req, res) => {
    // Some logic to fetch the resource
    const resource = fetchResource();

    if (!resource) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Resource not found'
        });
    } else {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'Resource fetched successfully',
            data: resource
        });
    }
});



// project-root/
// │
// ├── src/
// │   ├── controllers/
// │   │   └── ...
// │   ├── models/
// │   │   └── ...
// │   ├── routes/
// │   │   └── ...
// │   ├── utils/
// │   │   └── responseUtils.js
// │   └── app.js (or index.js)
// │
// └── ...

