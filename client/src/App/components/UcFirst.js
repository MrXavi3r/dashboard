const UcFirst = () => {
  const string = this.props.text;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default UcFirst;
