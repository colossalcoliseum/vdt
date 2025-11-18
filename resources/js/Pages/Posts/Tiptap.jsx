import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldSharpIcon from '@mui/icons-material/FormatBoldSharp';
import FormatStrikethroughSharpIcon from '@mui/icons-material/FormatStrikethroughSharp';
import FormatAlignRightSharpIcon from '@mui/icons-material/FormatAlignRightSharp';
import FormatAlignLeftSharpIcon from '@mui/icons-material/FormatAlignLeftSharp';
import FormatAlignCenterSharpIcon from '@mui/icons-material/FormatAlignCenterSharp';
const MenuBar = ({editor}) => {
    if (!editor) {
        return null
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 1,
                m: 2,
                bgcolor: 'rgba(255,255,255,0.7)',
                backdropFilter: "blur(10px) saturate(180%)",
                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                borderBottom: '0.20rem solid rgba(0,0,0,0.08)',
            }} elevation={0}>
                <Typography sx={{ mb: 2 }}>Tools</Typography>

                {/* Тук са инструментите */}
                <Box sx={{ display: 'flex', gap: 1 }}>


                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: '#000000',

                        П: 0.5,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                            className={editor.isActive('heading', {level: 1}) ? 'is-active' : ''}
                    >
                        H1
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        fontWeight: 'bold',
                        color: 'black',

                        m: 0.5,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                            className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
                    >
                        H2
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',

                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                            className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}
                    >
                        H3
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,233,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().setParagraph().run()}
                            className={editor.isActive('paragraph') ? 'is-active' : ''}
                    >
                        Paragraph
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? 'is-active' : ''}
                    >
                        <FormatBoldSharpIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? 'is-active' : ''}
                    >
                        <FormatItalicIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? 'is-active' : ''}
                    >
                        <FormatStrikethroughSharpIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().toggleHighlight().run()}
                            className={editor.isActive('highlight') ? 'is-active' : ''}
                    >
                        Highlight
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().setTextAlign('left').run()}
                            className={editor.isActive({textAlign: 'left'}) ? 'is-active' : ''}
                    >
                        <FormatAlignLeftSharpIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().setTextAlign('center').run()}
                            className={editor.isActive({textAlign: 'center'}) ? 'is-active' : ''}
                    >
                        <FormatAlignCenterSharpIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().setTextAlign('right').run()}
                            className={editor.isActive({textAlign: 'right'}) ? 'is-active' : ''}
                    >
                        <FormatAlignRightSharpIcon/>
                    </Button>
                    <Button sx={{
                        bgcolor: 'rgb(205,235,255)',
                        color: 'black',
                        p: 2,
                        m: 1,
                        border: '0.1rem solid rgba(0,0,0,0.08)',
                    }}
                            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                            className={editor.isActive({textAlign: 'justify'}) ? 'is-active' : ''}
                    >
                        Justify
                    </Button>
            </Box>
        </Paper>
        </Box>
    )
}

export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            /*TODO: добави емотикони*/
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight,
        ],
        content:

            `

      <h3 style="text-align:center">
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>
      <p style="text-align:center">
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <p style="text-align:center">
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life?"<br>
        Oh daddy dear, you know you’re still number one<br>
        But <s>girls</s>devs, they wanna have fun<br>
        Oh devs just want to have
      </p>
      <p style="text-align:center">
        That’s all they really want<br>
        Some fun<br>
        When the working day is done<br>
        Oh devs, they wanna have fun<br>
        Oh devs just wanna have fun<br>
        (devs, they wanna, wanna have fun, devs wanna have)
      </p>
    `
        ,
    })

    return (
        <>
            <MenuBar editor={editor}/>
            <Paper><EditorContent editor={editor}/></Paper>
        </>
    )
}
