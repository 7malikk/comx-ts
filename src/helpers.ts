export const formatNum = (number: string) => {
  const newNum = parseFloat(number);
  if (number) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(newNum);
  } else {
    return 'Loading...';
  }
};
