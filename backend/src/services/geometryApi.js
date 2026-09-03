export async function calculateCircleApi(radius) {
    const response = await fetch(
        "http://localhost:3000/api/calculations/calculate/circle",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                radius
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Calculation failed");
    }

    return data;
}

export async function calculateRectangleApi(length, width) {
    const response = await fetch(
        "http://localhost:3000/api/calculations/calculate/rectangle",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                length,
                width
            })
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Calculation failed");
    }

    return data;
}
