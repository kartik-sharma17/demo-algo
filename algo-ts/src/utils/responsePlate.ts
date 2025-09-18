import type { Response } from "express";

export const responsePlate = (
  res: Response,
  { success = true, message = "", data = {}, status = 200 }
) => {
  return res.status(status).json({
    success,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};
