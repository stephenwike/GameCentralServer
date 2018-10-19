function ConnectionEntry(data)
{
    GetGameConfig(data);
}

function PopulateConfig(data)
{
    // Load Game Name
	var ConfigGameName = document.getElementById('ConfigGameName');
	if (typeof(ConfigGameName) != 'undefined' && ConfigGameName != null)
	{
		ClearElement(ConfigGameName);

		var gameName = document.createElement('h1');
		var text = document.createTextNode(data["Game"]);
		gameName.appendChild(text);
		ConfigGameName.appendChild(gameName);
    }
    
    // Load Config options
	var options = data.config;

	var ConfigContainer = document.getElementById('ConfigContainer');
	if (typeof(ConfigContainer) != 'undefined' && ConfigContainer != null)
	{
		ClearElement(ConfigContainer);

		for (var index = 0; index < options.length; ++index)
		{
			var selectionType = options[index].SelectionType;
			
			CreateOptionsNode(options[index]);
		}
	}
}

function ClearElement(element)
{
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

function CreateOptionsNode(options)
{
	console.log(options);
	var ConfigContainer = document.getElementById('ConfigContainer');

	// Create Option Container
	var OptionContainer = document.createElement('div');
	OptionContainer.classList.add("OptionContainer");
	var OptionInfo = document.createElement('div');
	OptionInfo.classList.add("OptionInfo");

	// Create Title
	var title = document.createElement('h2');
	var titleText = document.createTextNode(options.Title);
	title.appendChild(titleText);
	title.classList.add("OptionTitle");
	OptionInfo.appendChild(title);
	
	// Create Description
	var desc = document.createElement('h3');
	var descText = document.createTextNode(options.Description);
	desc.appendChild(descText);
	desc.classList.add("OptionDesc");
	OptionInfo.appendChild(desc);

	// Add Option Info to Option Container
	OptionContainer.appendChild(OptionInfo);

	// Create Selected
	var selected = CreateOptionSelected(options);
	OptionContainer.appendChild(selected);
	
	// Add Option Container to Config Container
	ConfigContainer.appendChild(OptionContainer);
}

function CreateOptionSelected(options)
{
	var selected = document.createElement('h1');
	selected.classList.add("OptionSelected");

	switch (options.SelectionType)
	{
		case "Dropdown": 
			var selectedText = document.createTextNode(options.Options[options.Selected]);
			selected.appendChild(selectedText);
			break;
		case "Checkbox":
			var checkOption = (options.Selected == "0") ? "" : "\u2713";
			var selectedText = document.createTextNode(checkOption);
			selected.appendChild(selectedText);
			break;
	}
	
	return selected;
}