const getErrorMessage = (err, translate) => {
  const data = err;
  const key = data?.code ?? "global.errors.unknown";
  return translate(key);
};

export { getErrorMessage as g };
//# sourceMappingURL=handleError-CR-QhlYX.js.map
