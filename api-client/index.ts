interface ErrorResponse {
  message: string;
}

export async function apiClient<T extends ErrorResponse>(
  endpoint: string,
  options = {}
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3000";

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const response = await fetch(`${apiUrl}${endpoint}`, requestOptions);
  const data: T = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
