import { getFetchNews } from "../apis/news";

export function getNews(newsList: HTMLOListElement | null, pageNo: number) {
  if (!newsList) {
    return;
  }

  newsList.innerHTML = "";

  getFetchNews(pageNo).then((allNews) => {
    // console.log(allNews);
    // console.log(allNews[0]);

    allNews.map((news, id) => {
      const newsItem = document.createElement("li");

      newsItem.className = "grid grid-cols-[18px_14px_1fr] items-start";

      const rank = document.createElement("span");
      rank.className = "pr-1 text-right text-[#828282]";
      rank.textContent = `${30 * (pageNo - 1) + id + 1}.`;
      newsItem.appendChild(rank);

      const upvote = document.createElement("span");
      upvote.className = "pt-[2px] text-[10px] text-[#828282]";
      upvote.textContent = "▲";
      newsItem.appendChild(upvote);

      const meta = document.createElement("div");
      meta.className = "leading-[1.1]";

      const title = document.createElement("a");
      title.className = "text-[#000] hover:underline";
      title.textContent = news.title;
      title.href = news.url;
      meta.appendChild(title);

      if (news.domain) {
        const domain = document.createElement("span");
        domain.className = "pl-[4px] text-[#828282]";
        domain.textContent = `(${news?.domain})`;

        meta.appendChild(domain);
      }

      const subMeta = document.createElement("div");
      subMeta.className = "mt-[2px] text-[11px] leading-tight text-[#828282]";

      const userLink = document.createElement("a");
      userLink.className = "hover:underline";
      userLink.href = `https://news.ycombinator.com/user?id=${news.user}`;
      userLink.textContent = news.user;

      const commentsLink = document.createElement("a");
      commentsLink.className = "hover:underline";
      commentsLink.href = `https://news.ycombinator.com/item?id=${news.id}`;
      commentsLink.textContent = `${news.comments_count} comments`;

      subMeta.append(
        `${news.points} points by `,
        userLink,
        ` ${news.time_ago} | `,
        commentsLink,
      );

      const blog = document.createElement("div");
      blog.appendChild(meta);
      blog.appendChild(subMeta);
      newsItem.appendChild(blog);
      newsList.appendChild(newsItem);
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
  newsList: HTMLOListElement | null,
  page: HTMLButtonElement | null,
  pageNo: number,
): number {
  page?.classList.add("text-[#000033]");
  page?.addEventListener("click", () => {
    pageNo += 1;
    getNews(newsList, pageNo);
  });
  return pageNo;
}
