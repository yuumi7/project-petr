const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  if (!res.ok) {
    throw new Error(`Ошибка HTTP: ${res.status}`);
  }

  try {
    return await res.json();
  } catch {
    return {};
  }
};

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

getResource("http://localhost:3000/menu").then((data) => {
  data.forEach(({ img, altimg, title, descr, price }) => {
    new MenuCard(
      img,
      altimg,
      title,
      descr,
      price,
      ".menu__field .container"
    ).render();
  });
});

export { postData };
export { getResource };
