import { getFetchData } from "./api";

export function showData(
  list: HTMLOListElement | null,
  pageNo: number,
  url: string,
) {
  if (!list) {
    return;
  }

  list.innerHTML = "";

  getFetchData(pageNo, url).then((allData) => {
    // console.log(allData);
    // console.log(allData[0]);

    allData.map((info, id) => {
      const item = document.createElement("li");

      item.className = "grid grid-cols-[18px_14px_1fr] items-start";

      const rank = document.createElement("span");
      rank.className = "pr-1 text-right text-[#828282]";
      rank.textContent = `${30 * (pageNo - 1) + id + 1}.`;
      item.appendChild(rank);

      const upvote = document.createElement("span");
      upvote.className = "pt-[2px] text-[10px] text-[#828282]";
      upvote.textContent = "▲";
      item.appendChild(upvote);

      const meta = document.createElement("div");
      meta.className = "leading-[1.1]";

      const title = document.createElement("a");
      title.className = "text-[#000] hover:underline";
      title.textContent = info.title;
      title.href = info.url;
      title.target = "_blank";
      meta.appendChild(title);

      if (info.domain) {
        const domain = document.createElement("span");
        domain.className = "pl-[4px] text-[#828282]";
        domain.textContent = `(${info?.domain})`;

        meta.appendChild(domain);
      }

      const subMeta = document.createElement("div");
      subMeta.className = "mt-[2px] text-[11px] leading-tight text-[#828282]";

      const userLink = document.createElement("a");
      userLink.className = "hover:underline";
      userLink.href = `https://info.ycombinator.com/user?id=${info.user}`;
      userLink.textContent = info.user;

      const commentsLink = document.createElement("a");
      commentsLink.className = "hover:underline";
      commentsLink.href = `https://info.ycombinator.com/item?id=${info.id}`;
      commentsLink.textContent = `${info.comments_count} comments`;
      if (url == "jobs") {
        subMeta.append(`${info.time_ago}`);
      } else {
        subMeta.append(
          `${info.points} points by `,
          userLink,
          ` ${info.time_ago} | `,
          commentsLink,
        );
      }

      const blog = document.createElement("div");
      blog.appendChild(meta);
      blog.appendChild(subMeta);
      item.appendChild(blog);
      list.appendChild(item);
    });
  });
}

//          <li class="grid grid-cols-[18px_14px_1fr] items-start">
//             <span class="pr-1 text-right text-[#828282]">1.</span>
//             <span class="pt-[2px] text-[10px] text-[#828282]">&#9650;</span>
//             <div>
//               <div class="leading-[1.1]">
//                 <a href="#" class="text-[#000] hover:underline">Show HN: Tiny RSS reader that fits in your browser bookmark bar</a>
//                 <span class="text-[#828282]"> (github.com)</span>
//               </div>
//               <div class="mt-[2px] text-[11px] leading-tight text-[#828282]">
//                 132 points by <a href="#" class="hover:underline">azad</a> 3 hours ago | <a href="#" class="hover:underline">41 comments</a>
//               </div>
//             </div>
//           </li>

export function pageUP(
  list: HTMLOListElement | null,
  page: HTMLButtonElement | null,
  pageNo: number,
  url: string,
): number {
  page?.classList.add("text-[#000033]");
  page?.addEventListener("click", () => {
    pageNo += 1;
    showData(list, pageNo, url);
  });
  return pageNo;
}
