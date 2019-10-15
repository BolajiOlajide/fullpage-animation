new fullpage('#fullpage', {
  autoscrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('h1');

    const tl = new TimelineMax({ delay: 0.5 });

    const tlOrigin = { y: '50', opacity: 0 };
    const tlDestination = { y: 0, opacity: 1 };

    tl.fromTo(title, 0.5, tlOrigin, tlDestination);

    if (destination.index === 1) {
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');

      tl
        .fromTo(chairs, 0.7, { x: '100%' }, { x: '-40%' })
        .fromTo(description, 1, tlOrigin, tlDestination)
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
})