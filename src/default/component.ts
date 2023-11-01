export async function component(src: string): Promise<string> {
  try {
   const response = await fetch(src);
    if (response.ok) {
      const htmlContent = await response.text();
      const processedHTML = htmlContent.replace(/&lt;/g, '<%= ').replace(/&gt;/g, ' %>');
      console.log(processedHTML);

      return processedHTML;
    } else {
      throw('Failed to load HTML component');
    }
  } catch (error) {
    throw(`Error occurred while fetching or processing the HTML component file: ${error}`);
  }
}