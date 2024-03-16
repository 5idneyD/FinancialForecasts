def signupEmail():
    msg_text = f"""
            Hello,\nThank you for being interested in signing up to No Variance!\n
            You are being sent this email to verify that it was you who is signing up to No Variance and ensure nobody is using your
            email address that you don't know about.\n
            The code required to sign-up is : {verification_code}.\n\n
            If you have not requested this, please discard this email.
            \n\nKind regards,
            \nNo Variance
            """.strip()


    template = '''
<!DOCTYPE html>
<html>
    <body>
        <div style="background-color:#eee;padding:10px 20px;">
            <h2 style="font-family:Georgia, 'Times New Roman', Times, serif;color#454349;">My newsletter</h2>
        </div>
        <div style="padding:20px 0px">
            <div style="height: 500px;width:400px">
                <div style="text-align:center;">
                    <h3>Article 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ducimus deleniti nemo quibusdam iste sint!</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    </body>
</html>
'''