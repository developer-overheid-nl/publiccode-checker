  const uriSubmitted = async (pcYmlUri: string) => {
    try {
      const response = await fetch(pcYmlUri);
      const yamlText = await handleResponse(response, pcYmlUri);

      // Parse YAML to JSON
      const parsed = Yaml.parse(yamlText);

      // Convert to formatted JSON string
      const jsonString = JSON.stringify(parsed.data, null, 2);

      console.log(jsonString);
      
      
      // Set the content and URI
      setContent(jsonString);
      setUri(pcYmlUri);

      console.log('Converted YAML to JSON:', jsonString);
    } catch (error) {
      console.error('Error fetching or converting publiccode.yml:', error);
    }
  }
