const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = 
{
    name: "Mauricio Contreras",
    nickname: "mauricioc12",
    description: "...",
    avatar: "...",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/Maurii1202",
        username: "@Maurii1202",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/mauriciocontreras02/",
        username: "@mauriciocontreras02",
      },
    ],
    
    links: 
    [
      {
        name: "blog",
        url: "https://mauricioc12.github.io/My-Website/#contact",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Perú",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
              <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
                href="${link.url}" target="_blank">
                ${link.name}
              </a>
              <span>${link.emoji}</span>
          </div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();