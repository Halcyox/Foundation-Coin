# monolith_theme.py
import gradio as gr

class MonolithTheme(gr.Theme):
    base = "dark"
    primary_color = "#2A2A2A"  # Dark metallic gray
    secondary_color = "#414141"  # Light metallic gray
    accent_color = "#7B9ACC"  # Sci-fi neon blue
    text_color = "#FFFFFF"  # Bright white for high readability
    background_color = "#000000"  # Deep space black
    input_background_color = "#2A2A2A"
    output_background_color = "#2A2A2A"
    button_color = "#414141"
    button_hover_color = "#7B9ACC"
    button_text_color = "#FFFFFF"
    font = "'Exo', sans-serif"
    font_size = "16px"
    border_radius = "0"  # Sharp edges for a modern look
    transition = "background-color 0.2s, color 0.2s, border-color 0.2s"
    text_box_shadow = "0 0 10px #7B9ACC"
    button_box_shadow = "0 0 10px #7B9ACC"
    container_box_shadow = "0 0 20px #7B9ACC"
    
    custom_css = """
    :root {
        --color-background: var(--primary-color);
        --color-text: var(--text-color);
        --color-hover: var(--accent-color);
        --button-background-color: var(--button-color);
        --button-text-color: var(--button-text-color);
        --button-hover-background-color: var(--button-hover-color);
        --button-hover-text-color: var(--primary-color);
        --border-radius: var(--border-radius);
    }
    body {
        font-family: var(--font);
        background-image: url('starfield.png'); /* A starfield background image */
        background-size: cover;
    }
    .gr-button, .gr-button:active, .gr-button:hover, .gr-button:focus {
        background-color: var(--button-background-color);
        color: var(--button-text-color);
        border: 1px solid var(--accent-color);
        box-shadow: var(--button-box-shadow);
        transition: var(--transition);
    }
    .gr-button:hover {
        background-color: var(--button-hover-background-color);
        color: var(--button-hover-text-color);
        box-shadow: none;
    }
    .gr-textbox, .gr-textbox:focus {
        border: 1px solid var(--secondary-color);
        box-shadow: var(--text-box-shadow);
    }
    .gr-output-container {
        border: 1px solid var(--secondary-color);
        box-shadow: var(--container-box-shadow);
    }
    .gr-example-container {
        border-top: 1px solid var(--secondary-color);
    }
    """



# Instantiate your custom theme
# theme = MonolithTheme()
# Use the custom theme in a Gradio app