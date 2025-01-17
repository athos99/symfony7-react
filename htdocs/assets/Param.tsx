export function getParam(name: string) : any {
  return (document as unknown as {app:Record<string, any>})?.app[name]??null;
}

export function setParam(name: string, value:any)  {
    (document as unknown as {app:Record<string, any>}).app??=[];
    (document as unknown as {app:Record<string, any>}).app[name] = value;
}

