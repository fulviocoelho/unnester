const isObj = async (unknownVariable: unknown): Promise<boolean> => {
  return typeof unknownVariable === 'object' && unknownVariable !== null;
};

const listObjProperties = async (objectToListProperties: object): Promise<string[]> => {
  return Object.getOwnPropertyNames(objectToListProperties);
};

const checkForObjsInProperties = async (object: any): Promise<boolean> => {
  const indexes: string[] = await listObjProperties(object);
  for (const index of indexes) {
    if (await isObj(object[index])) {
      return true;
    }
  }
  return false;
};

const returnObjPropertiesArray = async (objectToUnnest: any, path: string): Promise<object> => {
  let indexes: string[];
  if (Array.isArray(objectToUnnest)) {
    indexes = await listObjProperties(objectToUnnest);
    indexes.splice(indexes.length - 1, 1);
  } else {
    indexes = await listObjProperties(objectToUnnest);
  }
  const objToReturn: any = {};
  for (const index of indexes) {
    objToReturn[`${path}_${index}`] = objectToUnnest[index];
  }
  return objToReturn;
};

export const unnest = async (toUnnest: object) => {
  let hasInternalObj = true;
  const returnObj: any = toUnnest;
  do {
    const indexes = await listObjProperties(returnObj);
    for (const index of indexes) {
      if ((await isObj(returnObj[index])) === false) {
        continue;
      }

      const unnestedObject: any = await returnObjPropertiesArray(returnObj[index], index);
      const indexesUnnestedObject = await listObjProperties(unnestedObject);
      for (const subIndex of indexesUnnestedObject) {
        returnObj[subIndex] = unnestedObject[subIndex];
      }

      delete returnObj[index];
    }
    hasInternalObj = await checkForObjsInProperties(returnObj);
  } while (hasInternalObj);
  return returnObj;
};
