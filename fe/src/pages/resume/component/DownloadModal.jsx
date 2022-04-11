import { Button, Modal } from "@douyinfe/semi-ui"
import { useState } from "react"

export default function DownloadModal () {
    const [showModal, setShowModal] = useState(false)

    return <>
        <Button>

        </Button>
        <Modal
            title="基本对话框"
            visible={showModal}

        >
            This is the content of a basic modal.
            <br />
            More content...
        </Modal>
    </>

}