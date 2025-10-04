export const numberFormatter = (value: number , locale : string ="fa") => {
    return Intl.NumberFormat(locale).format(value);
}

export const dateFormatter = (date: number, locale: string = "fa", opt: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}) => {
    return new Date(date).toLocaleString(locale, opt)
}