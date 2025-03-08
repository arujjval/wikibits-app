export const fetchWikiSummary = async (title: string) => {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
      );
      const data = await response.json();
      return data; // Contains title, extract, image, and links
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error);
      return null;
    }
};