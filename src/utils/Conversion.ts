
export function ArrayMove(arr, oldIndex, newIndex) {
    if ((oldIndex < arr.length) && (newIndex < arr.length))
    {
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    }
};

export function BooleanChecker(variable) {
    if (typeof variable === "boolean")
    {
        return variable;
    }
    else
    {
        const stringVariable = variable.toString().toLowerCase();
        if (stringVariable === 'true')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};

export function StringChecker(stringVariable)
{
    return (IsNotNull(stringVariable) && typeof stringVariable === "string" && stringVariable.length > 0) ? stringVariable : "";
}

export function IsNotNull(obj)
{
    return obj && obj !== 'null' && obj !== 'undefined';
}

export function  StripAtSign(stringVariable) {
    let cleaned = StringChecker(stringVariable);
    cleaned = cleaned.replace(/@ /, "");
    return cleaned;
}

export function  StripScheduler(stringVariable) {
    let cleaned = StringChecker(stringVariable);
    cleaned = cleaned.replace(/Scheduler./, "");
    return cleaned;
}

export function  StripPipes(stringVariable) {
    let cleaned = StringChecker(stringVariable);
    cleaned = cleaned.replace(/\|/g, "");
    return cleaned;
}

export function  StripHex(stringVariable)
{
    let cleaned = StringChecker(stringVariable);
    if (cleaned.length >= 8) {
        cleaned = "#" + cleaned.substring(2,8);
    }
    return cleaned;
}

export function Uptime(adminTaskRunCount) {

    if (adminTaskRunCount!== undefined)
    {    
        const d = Number(adminTaskRunCount) * 3;
        const h = Math.floor(d / 3600);
        const m = Math.floor(d % 3600 / 60);
        const s = Math.floor(d % 3600 % 60);

        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }
    else
    {
        return '00:00:00';
    }
}

export const getCircularReplacer = () => {
  const seen = new WeakSet;
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
