export const directive = {
  inserted(el, bindings, vnode) {
    const observer = new IntersectionObserver((entries, self) => {
      if (entries.length && entries[0].isIntersecting) {
        vnode.elm.dispatchEvent(new CustomEvent("inView", { el }));
        if (bindings.arg === "once") self.unobserve(el);
      }
    });
    observer.observe(el);
  }
};
