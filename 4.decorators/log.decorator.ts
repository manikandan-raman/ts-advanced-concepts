export function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Method ${propertyKey}() called with arguments: ${JSON.stringify(args)}`
    );
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey}() returned: ${JSON.stringify(result)}`);
    return result;
  };

  return descriptor;
}
