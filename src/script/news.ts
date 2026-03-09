import { getNews, pageUP } from "../dom/news";
import "../style.css";

let pageNo = 1;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="min-h-screen bg-[#f6f6ef] text-[#000] [font-family:Verdana,Geneva,sans-serif]">
    <main class="mx-auto w-full max-w-[1200px] px-0 sm:mt-2 sm:px-3">
      <header class="flex min-h-[30px] items-center gap-1 border-b border-[#ff6600] bg-[#fffaf0] px-1 text-[18px] leading-none text-[#ff6600]">
        <a href="/src/pages/news.html" class="mr-1 flex h-[23px] w-[23px] shrink-0 items-center justify-center border border-[#ff6600] bg-[#ff6600] text-[16px] font-bold text-white">Y</a>
        <a href="/src/pages/news.html" class="mr-1 whitespace-nowrap font-bold text-[#ff6600] hover:underline">Hacker News</a>
        <nav class="flex flex-wrap items-center gap-1 text-[18px]">
          <a href="/src/pages/new.html" class="text-[#ff6600] hover:underline">new</a>
          <span>|</span>
          <a href="/src/pages/past.html" class="text-[#ff6600] hover:underline">past</a>
          <span>|</span>
          <a href="/src/pages/comments.html" class="text-[#ff6600] hover:underline">comments</a>
          <span>|</span>
          <a href="/src/pages/ask.html" class="text-[#ff6600] hover:underline">ask</a>
          <span>|</span>
          <a href="/src/pages/show.html" class="text-[#ff6600] hover:underline">show</a>
          <span>|</span>
          <a href="/src/pages/jobs.html" class="text-[#ff6600] hover:underline">jobs</a>
          <span>|</span>
          <a href="https://news.ycombinator.com/submit" class="text-[#ff6600] hover:underline">submit</a>
        </nav>
        <a href="https://news.ycombinator.com/login" class="ml-auto whitespace-nowrap text-[17px] text-[#ff6600] hover:underline">login</a>
      </header>

      <section class="bg-[#f6f6ef] px-2 py-2 text-[14px] sm:text-[13px]">
        <ol class="space-y-2.5" id="news">
          
        </ol>

        <button class="mt-4 inline-block pl-8 text-[13px] hover:underline" id="more">More</button>
      </section>

      <footer class="mt-6 border-t border-[#ff6600] px-2 py-4 text-center text-[11px] text-[#828282]">
        <div class="mb-2 flex flex-wrap items-center justify-center gap-1 leading-tight">
          <a href="https://news.ycombinator.com/newsguidelines.html" class="hover:underline">Guidelines</a>
          <span>|</span>
          <a href="https://news.ycombinator.com/newsfaq.html" class="hover:underline">FAQ</a>
          <span>|</span>
          <a href="https://news.ycombinator.com/lists" class="hover:underline">Lists</a>
          <span>|</span>
          <a href="https://github.com/HackerNews/API" class="hover:underline">API</a>
          <span>|</span>
          <a href="https://news.ycombinator.com/security.html" class="hover:underline">Security</a>
          <span>|</span>
          <a href="https://www.ycombinator.com/legal/" class="hover:underline">Legal</a>
          <span>|</span>
          <a href="https://www.ycombinator.com/apply/" class="hover:underline">Apply to YC</a>
        </div>
        <div class="mx-auto flex max-w-[340px] items-center justify-center gap-2">
          <label for="search" class="text-[#828282]">Search:</label>
          <input id="search" type="text" class="h-5 w-full border border-[#828282] bg-white px-1 text-[12px] text-[#000] outline-none" />
        </div>
      </footer>
    </div>
  </div>
`;

pageNo = pageUP(
  document.querySelector<HTMLOListElement>("#news"),
  document.querySelector<HTMLButtonElement>("#more"),
  pageNo,
);
getNews(document.querySelector<HTMLOListElement>("#news"), pageNo);
