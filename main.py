import gradio as gr
from monolith_theme import MonolithTheme

theme = MonolithTheme()

model = gr.Interface.load("huggingface/EleutherAI/gpt-neo-2.7B")

examples = [
    ['The tower is 324 metres (1,063 ft) tall,'],
    ["The Moon's orbit around Earth has"],
    ["The smooth Borealis basin in the Northern Hemisphere covers 40%"]
]
article = """
<p style='text-align: center'>
  <a href='http://github.com/eleutherai/gpt-neo'>
    GPT-Neo: Large Scale Autoregressive Language Modeling with Mesh-Tensorflow
  </a>
</p>
<p style='text-align: center'>
  <a href='https://foundation.app/FoundationCoin'>
    Discover the lore of Foundation Coin
  </a>
</p>
"""

description = """
Embark on an interstellar journey with the Interplanetary Expert, an advanced AI designed to navigate the vast complexities of the cosmos. Harnessing the immense knowledge contained within the Foundation Coin archives, this expert system offers insights into the development of spacefaring civilizations, cosmic phenomena, and the untold secrets of the universe. Enter your query and unlock the mysteries of the stars.
"""
demo = gr.Interface(
    fn=model,
    inputs=gr.Textbox(label="User Input",placeholder="Type your prompt here..."),
    outputs=gr.Textbox(label="Generated Text"),
    title="Interplanetary Expert",
    description=description,
    examples=examples,
    article=article,
    theme=theme
)

demo.launch("127.0.0.1:7861")