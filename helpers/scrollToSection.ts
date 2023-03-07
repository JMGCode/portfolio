const scrollToSection = (id: string, offset: number = 100) => {
  const section = document.getElementById(id);
  // const offsetHeight = document.body.scrollHeight - section!!.scrollHeight - 96;

  window.scrollTo({
    top: (section?.offsetTop || 0) - offset,
    behavior: "smooth",
  });
};

export default scrollToSection;
