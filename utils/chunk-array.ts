/**
 * This function use for divide the original array into smaller subarrays of 
 * the specified size
 * @param array - original array  
 * @param size - chunk size 
 * @returns 
 */

function chunkArray<T>(array: T[], size: number) {
  return  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
  }
  export default chunkArray

 