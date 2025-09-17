export const responsePlate = (res, { success = true, message = "", data = {}, status = 200 }) => {
    return res.status(status).json({
        success,
        message,
        data,
        timestamp: new Date().toISOString(),
    })
}