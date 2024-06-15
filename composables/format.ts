// WITH DOTS LIKE THIS 24.06.2023
export const useFormatDateDots = (d: Date | string) => {
    const datetime = new Date(d);
    return datetime.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
};
