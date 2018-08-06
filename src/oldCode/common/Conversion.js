export function  StringChecker(stringVariable)
{
    return (typeof stringVariable === "string" && stringVariable.length > 0) ? stringVariable : "";
}